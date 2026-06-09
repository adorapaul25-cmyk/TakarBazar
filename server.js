const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// public ফোল্ডারের ভেতরের index.html এবং অন্যান্য ফাইল স্ট্যাটিক হিসেবে ওপেন করার জন্য
app.use(express.static(path.join(__dirname, 'public')));

// যে কোনো রিকোয়েস্ট আসলেই সরাসরি আমাদের সুন্দর ড্যাশবোর্ড ফাইলটি দেখাবে
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
