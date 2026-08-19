from services.model_loader import basketball_model

def detect_basketball(frame, conf=0.4):
    results = basketball_model.track(frame, conf=conf, persist=True)
    return results