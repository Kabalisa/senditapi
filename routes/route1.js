import express from 'express';

const router = express.Router();

router.get('/tail', (req,res) =>{
  res.json({status: 'it works'});
});

export default router;