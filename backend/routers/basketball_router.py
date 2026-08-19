from fastapi import APIRouter, UploadFile
from services.basketball_service import detect_basketball
import cv2
import numpy as np

router = APIRouter(prefix="/detect", tags=["Basketball"])

@router.post("/basketball")
async def basketball_endpoint(file: UploadFile):
    contents = await file.read()
    npimg = np.frombuffer(contents, np.uint8)
    frame = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    results = detect_basketball(frame)

    detections = []
    for r in results:
        for box in r.boxes:
            detections.append({
                "class": r.names[int(box.cls.item())],
                "confidence": float(box.conf.item()),
                "bbox": box.xyxy[0].tolist()
            })

    return {"detections": detections}