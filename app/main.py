"""Application entrypoint for the Sunlight web server."""

from app.server.routes import create_app

app = create_app()
