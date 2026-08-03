from services.model_loader import ball_hoop_model

def detect_ball_hoop(frame, conf=0.70):
    results = ball_hoop_model.predict(frame, conf=conf)
    return results