import { StyleSheet } from 'react-native';
import color from '../../contains/color';

export const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: color.white,
    marginBottom: 15,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  square: {
    width: 48,
    height: 36,
    backgroundColor: color.second,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 16,
    fontWeight: 700,
    color: color.white,
  },
  content: {
    width: '80%',
    fontSize: 16,
  },
  input: {
    flex: 1,
    flexDirection: 'row',
  },
});
