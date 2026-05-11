# TourMate Backend

This is the Python backend for the TourMate project, a travel planning application.

## Overview

The backend handles data processing, LLM interactions for personalized recommendations, and dataset management for travel-related information.

## Setup Instructions

1. **Create Virtual Environment**:
   ```
   python -m venv venv
   ```

2. **Activate Virtual Environment**:
   - Windows: `.\venv\Scripts\Activate.ps1`
   - Linux/Mac: `source venv/bin/activate`

3. **Install Dependencies**:
   ```
   pip install -r requirements.txt
   ```

4. **Install Ollama**:
   - Download from [ollama.com](https://ollama.com/)
   - Or use package manager: `winget install Ollama.Ollama` (Windows)

5. **Pull the Qwen Model**:
   ```
   ollama pull qwen2.5:7b
   ```

## Running the Application

- **Conversation Script**: Run `python converse.py` to interact with the Qwen LLM for testing purposes.

## Dataset Curation

The first task is to curate a dataset for travel recommendations. Specifications will be provided later.

## Important Notes

- Ensure Ollama service is running before using LLM features.
- Conversation outputs are stored in `conversation.log` for reference.
- Use the virtual environment for all Python operations to avoid dependency conflicts.