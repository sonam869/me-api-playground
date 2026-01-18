const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/health', profileController.healthCheck);
router.get('/profile', profileController.getProfile);
router.post('/profile', profileController.updateProfile);
router.get('/projects', profileController.getProjects);
router.get('/search', profileController.searchProjects);
router.get('/skills/top', profileController.getTopSkills);
router.put('/projects/:projectId', profileController.updateProject); // 👈 For the Edit feature
router.post('/projects', profileController.addProject);

module.exports = router;

//http://localhost:5000/api/health..get
//http://localhost:5000/api/profile..get
//http://localhost:5000/api/profile..post body(json)

//http://localhost:5000/api/projects?skill=filter logic..get
//http://localhost:5000/api/search?q=keyword