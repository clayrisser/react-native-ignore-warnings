import ignoreWarnings from 'ignore-warnings';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LogBox } from 'react-native';

export default function(type, ignoreMessages) {
  if (!ignoreMessages) {
    ignoreMessages = type;
    type = 'warn';
  }
  if (!Array.isArray(ignoreMessages)) ignoreMessages = [ignoreMessages];
  LogBox.ignoreLogs(ignoreMessages);
  ignoreWarnings(type, ignoreMessages);
}
