# from ultralytics import YOLO

# model = YOLO("ml-models/basketball_model.pt")
# results = model.track(source="0", show=True, conf=0.25, stream=True, persist=True)
# for r in results:
#     for box in r.boxes:
#         class_name = model.names[int(box.cls.item())]
#         x1, y1, x2, y2 = box.xyxy[0].tolist()
#         print(f"{class_name} at ({x1:.0f},{y1:.0f})-({x2:.0f},{y2:.0f})")

import cv2
from tqdm import tqdm
from ultralytics import YOLO

model = YOLO('ml-models/basketball_model.pt')

video_path = '/Users/david/Documents/basketball_nextrun_test.mov'

cap = cv2.VideoCapture(video_path)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
cap.release()

results = model.track(
    source=video_path,
    save=True,
    conf=0.4,
    device='mps',
    persist=True,
    stream=True,
    verbose=False
)

first_check = True
for r in tqdm(results, total=total_frames, desc="Tracking"):
    if first_check:
        print(f"Actual inference device: {next(model.model.parameters()).device}")
        first_check = False