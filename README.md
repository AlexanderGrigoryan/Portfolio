![This is header image](/src/img/logo.svg)

# Portfolio

### This is my personal portfolio

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Getting Started](#Getting-Started)
- [Project Structure](#Project-Structure)
- [Deployment](#Deployment)
- [Resources](#Resources)

#

### Prerequisites

- <img src="readme/nodejs.png" width="25" style="top: 8px" /> _Node JS @18.X and up_
- <img src="readme/npm.png" width="25" style="top: 8px" /> _npm @8 and up_

#

### Tech Stack

- <img src="readme/react.png" width="25" style="top: 8px" /> _React @ 18.2.0 - front-end framework_
- <img src="redme/styled-component.png" width="25" style="top: 8px"/> _Styled-components @ 5.3.6 - for styles_
- <img src="readme/react-router.png" width="25" style="top: 8px" /> _React-router @6.3.0 - library for routing_

#

### Getting Started

1. First of all you need to clone app repository from github:

```
git clone https://github.com/AlexanderGrigoryan/Portfolio.git
```

2. Next step requires install all the dependencies.

```
npm install
```

#

### Project Structure

```
|--- src
|   |--- img # project images
|   |--- components # reusable components
|   |--- App.js # export all components
|   |--- pages # all page components
|   |---|--- page-name.js # react component
|   |--- data.json # projects informations
- package.json # dependency manager configurations
```

#

### Deployment

Before every deployment you need to create build file.

```
npm run build
```

after this you can use this file to deploy project on server.

#

### Resources

- [figma](https://www.figma.com/file/nyDxzVIKpZ6RoHP3H13dCu/minimalist-portfolio-website?node-id=0%3A1&t=paNxZN5Uf9y6XehT-0).
