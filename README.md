# react-native-ignore-warnings

[![NPM](https://img.shields.io/npm/v/react-native-ignore-warnings.svg?style=flat-square)](https://www.npmjs.com/package/react-native-ignore-warnings)
[![NPM](https://img.shields.io/npm/dt/react-native-ignore-warnings.svg?style=flat-square)](https://www.npmjs.com/package/react-native-ignore-warnings)
[![GitHub stars](https://img.shields.io/github/stars/clayrisser/react-native-ignore-warnings.svg?style=social&label=Stars)](https://github.com/clayrisser/react-native-ignore-warnings)

> ⚛️🤷⚠️ Ignore react native warnings and logs

Please &#9733; this repo if you found it useful &#9733; &#9733; &#9733;

## Features

- Ignore warnings
- Ignore logs
- Ignore react native yellow box
- Compatible with Expo

## Installation

```sh
npm install --save react-native-ignore-warnings
```

## Dependencies

- [NodeJS](https://nodejs.org)
- [React Native](https://facebook.github.io/react-native)

## Usage

```ts
import ignoreWarnings from 'react-native-ignore-warnings';

ignoreWarnings(['Watch your six', 'Mind the gap', 'Beware the ides of March']);

ignoreWarnings('error', ['The house is on fire', 'System failure']);

ignoreWarnings('log', 'Hello, world');
```

## Support

Submit an [issue](https://github.com/clayrisser/react-native-ignore-warnings/issues/new)

## Contributing

Review the [guidelines for contributing](CONTRIBUTING.md)

## License

[Apache-2.0 License](LICENSE)

[Silicon Hills LLC](https://siliconhills.dev) &copy; Copyright 2018-2021

## Credits

- [Clay Risser](https://clayrisser.com) - Author
