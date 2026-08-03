from fastapi import APIRouter, UploadFile
from services.ball_hoop_service import detect_ball_hoop
import cv2
import numpy as np

router = APIRouter(prefix="/detect", tags=["Ball & Hoop"])

@router.post("/ball-hoop")
async def ball_hoop_endpoint(file: UploadFile):
    contents = await file.read()
    npimg = np.frombuffer(contents, np.uint8)
    frame = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    results = detect_ball_hoop(frame)

    detections = []
    for r in results:
        for box in r.boxes:
            detections.append({
                "class": r.names[int(box.cls.item())],
                "confidence": float(box.conf.item()),
                "bbox": box.xyxy[0].tolist()
            })

    return {"detections": detections}