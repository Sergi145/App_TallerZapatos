# SPACE APP

[![HTML5 and CSS3](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6I0fq6X2GNinHAMeD1XRuK_rdtkFWRCSk97y6BieAypoYl3HkXw)]

[![ES6](https://cdn.sencha.com/img/20130807-es6.png)]

[![REACT BOOTSTRAP](
https://react-bootstrap.github.io/assets/logo.png)]


[![React](https://cdn-images-1.medium.com/fit/c/200/200/0*M-pxLuwCMoMo52W1.png)]

[![AXIOS](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKULwinAOrRSM-Hk2Jg2pO7XLhmOCCasDdRq72ZFjtS5oFEIPP)]

[![webpack](https://raw.githubusercontent.com/ddmarin94/React-Webpack-Github/master/img/babel.png)](https://webpack.github.io/) 

[![npm](https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/188/thumb/npmlogo.png?1499963050)]



The project consists of an app that provides images of the Hubble telescope, the Curiosity spacecraft, the asteroids that orbit Earth in real time, and a section where you can download the best photos of the Hubble.

# Example API

```Javascript
export const getImageHubble = (query) => {
	const urlHubble = `https://api.nasa.gov/planetary/apod?date=${query}&api_key=${apiKey}`
	return axios.get(urlHubble)
		.then((data => data.data ) )
		
}
```
#  Contributors

- Soledad López  (https://github.com/sol-22)
- Sergi Picazo (https://github.com/Sergi145)
- Emilio Villuendas (https://github.com/emiliovillu)

# Dependencies

- "axios": "^0.16.2",
- "css-loader": "^0.28.7",
- "normalize-css": "^2.3.1",
- "prop-types": "15.6.0",
- "react": "^16.0.0",
- "react-bootstrap": "^0.31.3",
- "react-dom": "^16.0.0",
- "react-router-bootstrap": "^0.24.4",
- "react-router-dom": "^4.2.2",
- "react-scripts": "1.0.14",
- "style-loader": "^0.19.0"
