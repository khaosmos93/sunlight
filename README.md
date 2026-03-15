# sunlight

A minimal FastAPI + Three.js starter for visualizing a simple Sun/Earth 3D scene.

## Project structure

```text
sunlight/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── server/
│   │   ├── __init__.py
│   │   └── routes.py
│   ├── simulation/
│   │   ├── __init__.py
│   │   └── celestial.py
│   ├── static/
│   │   ├── css/
│   │   │   └── styles.css
│   │   └── js/
│   │       └── main.js
│   └── templates/
│       └── index.html
├── requirements.in
├── pyproject.toml
└── scripts/
    └── setup_venv.sh
```

## What is implemented

- FastAPI backend that serves the main page and static assets.
- Minimal scene metadata module for Sun/Earth body definitions.
- Three.js-based frontend rendering:
  - Sun as a bright visible sphere and point light.
  - Earth as a black wireframe sphere.
  - Orbit controls for camera inspection.
  - Dark background for contrast.

No atmosphere or atmospheric models are included.

## Run in GitHub Codespaces

1. Create and activate a virtual environment (or use the helper script):

   ```bash
   ./scripts/setup_venv.sh
   source .venv/bin/activate
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.in
   ```

3. Run the app:

   ```bash
   uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
   ```

4. Open the forwarded port `8000` in Codespaces.

Expected result: a dark scene with a bright Sun sphere and a black wireframe Earth sphere, with mouse orbit controls enabled.
