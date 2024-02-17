const apm = require('elastic-apm-node')
apm.start({
  serviceName: 'Node-Social-App-Backend',
  secretToken: 'testtoken',
  serverUrl: 'https://apm-dev.vishalaws.tech',
  captureBody: true,
  captureHeaders: true,
  active: true,
  usePathAsTransactionName: true,
  logLevel: 'trace',
  opentelemetryBridgeEnabled: true,
  transactionSampleRate: 1.0,
  captureBody: 'all',
  apiRequestTime: '2s',
  metricsInterval: '0s',
  environment: 'Dev'
})
  const app = require('express')()
  
  app.get("/testZZ", function (req,res) {
    res.send('testing worked')
  })

  app.get('/abc', function (req, res) {
    res.send('Hello World!')
  })

  app.get('/', function (req, res) {
    res.send('Hello World!')
  })

const express = require('express');
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/users.js');
const postRoutes = require('./routes/posts.js');
const cookieParser = require('cookie-parser');
const multer = require('multer');
app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

app.get('/test', function (req, res) {
  res.send('testing worked');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(8800, () => {
  console.log('Connected!');
});
