### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/innub/gbif-bot.git
   ```
2. Install packages, run in base directory:
   ```sh
   npm i
   ```
3. Create a .env file in base directory
   _See **.env.example** and follow the corresponding format._

**IMPORTANT: You MUST have the application registered with Imgur and ImgBB and obtain the correct client ID/API Key**

### How to Run

Run the development version:

```sh
npm run dev
```

Compile:

```sh
npm run build
```

Run the compiled version:

```sh
npm run start
```

### Running with pm2

1. Install pm2:

```sh
npm i -g pm2
```

2. Run:

```sh
yarn pm2
```
