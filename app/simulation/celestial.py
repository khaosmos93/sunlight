"""Minimal scene metadata for celestial bodies."""

from pydantic import BaseModel


class SceneBody(BaseModel):
    """Serializable representation of a body in the scene."""

    name: str
    radius: float
    color: str
    position: tuple[float, float, float]


SUN = SceneBody(name="sun", radius=1.4, color="#ffd35f", position=(-5.0, 0.0, 0.0))
EARTH = SceneBody(name="earth", radius=1.0, color="#000000", position=(2.0, 0.0, 0.0))


def get_scene_bodies() -> list[SceneBody]:
    """Return the current list of bodies rendered by the frontend scene."""

    return [SUN, EARTH]
