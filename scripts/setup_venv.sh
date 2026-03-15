#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VENV_PATH="${PROJECT_ROOT}/.venv"
PYTHON_BIN="${PYTHON_BIN:-python3.11}"

echo "[sunlight] Starting Python environment setup..."

if [[ ! -d "${VENV_PATH}" ]]; then
  echo "[sunlight] Creating virtual environment at ${VENV_PATH}"
  "${PYTHON_BIN}" -m venv "${VENV_PATH}"
else
  echo "[sunlight] Reusing existing virtual environment at ${VENV_PATH}"
fi

# shellcheck disable=SC1091
source "${VENV_PATH}/bin/activate"

echo "[sunlight] Upgrading pip/setuptools/wheel"
python -m pip install --upgrade pip setuptools wheel

echo "[sunlight] Installing dependencies from requirements.in"
python -m pip install -r "${PROJECT_ROOT}/requirements.in"

echo "[sunlight] Setup complete. Activate with: source .venv/bin/activate"
