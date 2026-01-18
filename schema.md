# Database Schema Documentation

## Profile Collection
This collection stores the primary user details and acts as the single source of truth for the Me-API.

| Field | Type | Description |
| :--- | :--- | :--- |
| **name** | String | Full name of the user |
| **email** | String | Professional email address |
| **bio** | String | Short professional summary |
| **skills** | Array [String] | List of technical skills for the "Top Skills" section |
| **projects** | Array [Object] | List of projects (see Project Structure below) |

## Project Structure (Sub-document)
| Field | Type | Description |
| :--- | :--- | :--- |
| **title** | String | The name of the project |
| **description** | String | Summary of what the project does |
| **tech** | Array [String] | Tech stack used (Target for Skill Filtering) |
| **links** | String | URL to GitHub repository or Live Demo |