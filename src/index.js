import ignoreWarnings from 'ignore-warnings';
import { YellowBox } from 'react-native';

export default function(type, ignoreMessages) {
  if (!ignoreMessages) {
    ignoreMessages = type;
    type = 'warn';
  }
  if (!Array.isArray(ignoreMessages)) ignoreMessages = [ignoreMessages];
  YellowBox.ignoreWarnings(ignoreMessages);
  ignoreWarnings(type, ignoreMessages);
}
