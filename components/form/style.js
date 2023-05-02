import { StyleSheet } from 'react-native';
import color from '../../contains/color';

export const styles = StyleSheet.create({
  addTask: {
    bottom: 30,
    paddingHorizontal: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    height: 44,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: color.primary,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: color.text,
  },
  iconWrapper: {
    width: 44,
    height: 44,
    backgroundColor: color.second,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
    color: color.white,
    fontWeight: 'bold',
  },
});
