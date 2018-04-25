import React from 'react';
import { View, StyleSheet } from 'react-native';
import FilterLink from './FilterLink';
import { VisibilityFilters } from '../redux/actions/todo';
const filterMap = [
  { filter: VisibilityFilters.SHOW_ALL, bgColor: '#5D9BFB', text: 'All' },
  { filter: VisibilityFilters.SHOW_ACTIVE, bgColor: '#84C6E4', text: 'Active' },
  { filter: VisibilityFilters.SHOW_COMPLETED, bgColor: '#7AD396', text: 'Completed' },
];
const Footer = () => (
  <View style={styles.container}>
    {filterMap.map((item, index) => {
      return (
        <View style={{ flex: 1 }} key={index}>
          <FilterLink filter={item.filter} bgColor={item.bgColor}>
            {item.text}
          </FilterLink>
        </View>
      );
    })}
  </View>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Footer;
