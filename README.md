<div align="center">
<h1>Raincheck ☔</h1>
</a>
Raincheck ☔ is a small web app that displays the current weather and forecast in any location in the world.
<br />

### Live demo at [weather.j21.dev](https://weather.j21.dev)
<br />

 <a href="https://github.com/Jeydin21/Raincheck/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/Jeydin21/Raincheck" alt="license"/>
  </a>
  <a href="https://github.com/Jeydin21/Raincheck/fork">
    <img src="https://img.shields.io/github/forks/Jeydin21/Raincheck?style=social" alt="fork"/>
  </a>
  <a href="https://github.com/Jeydin21/Raincheck/stargazers">
    <img src="https://img.shields.io/github/stars/Jeydin21/Raincheck?style=social" alt="stars"/>
  </a>

</p>
</div>
The aim of this project is to practice my front-end dev skills and visualization of data across multiple screen sizes.

## Bug Reporting
If you encounter any strange bugs on the website, please let me know by going to [issues](https://github.com/Jeydin21/Raincheck/issues/) and creating a bug report.

## Images
![](./public/assets/home.png)
![](./public/assets/example.png)

<details>
<summary>Initial Project Plan</summary>
<div align="center">

![](./public/assets/layout.png)

</div>
</details>

## Tech Stack
### Front-end:
- [React.js](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
### Back-end:
- [OpenWeather API](https://openweathermap.org/api/) - Used for current weather and air pollution data.
- [Meteosource API](https://www.meteosource.com/) - Used for daily and weekly forecasts.

## Local Development
### 1. Clone the project
1. Clone the repository into your system and install the dependencies.
```bash
$ git clone https://github.com/Jeydin21/Raincheck.git
$ cd Raincheck
$ npm install # Or yarn install
```

### 2. Environment Variable file setup
1. Rename the `.env.example` file to `.env`.

### 3. API Key setup
> [!CAUTION]
> The project does not work without these API Keys. Do NOT skip this step when setting up the project.

> [!TIP]
> If you have an account set up with these services already, you can skip making a new accont and just create a new project.

1. Go to the [OpenWeather website](https://openweathermap.org/) and make an account and create a new project. Copy the API Key into the environment variable labeled `NEXT_PUBLIC_OPENWEATHER_API_KEY`.

2. Go to the [Meteosource website](https://www.meteosource.com/) and make an account and create a new project. Copy the API Key into the environment variable labeled `NEXT_PUBLIC_METEOSOURCE_API_KEY`.

### 4. Start local development
1. Create a local development server.
```bash
$ npm run dev
```
2. Open the preview [localhost:3000](http://localhost:3000) in your browser.

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit) - see the [License](https://github.com/Jeydin21/Raincheck/blob/main/LICENSE) file for more details