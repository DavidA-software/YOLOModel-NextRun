from ultralytics import YOLO

model = YOLO("ml-models/best.pt")
results = model.track(source="0", show=True, conf=0.70, stream=True, persist=True)
for r in results:
    for box in r.boxes:
        class_name = model.names[int(box.cls.item())]
        x1, y1, x2, y2 = box.xyxy[0].tolist()
        print(f"{class_name} at ({x1:.0f},{y1:.0f})-({x2:.0f},{y2:.0f})")