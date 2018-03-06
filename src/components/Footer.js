import React from 'react'
import { View } from "react-native";
import FilterLink from './FilterLink'
import { VisibilityFilters } from '../redux/actions/todo'
 
const Footer = () => (
  <View>
        <FilterLink filter={VisibilityFilters.SHOW_ALL} bgColor="#5D9BFB">
        All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} bgColor="#84C6E4">
        Active
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} bgColor="#7AD396">
        Completed
        </FilterLink>
  </View>
)
 
export default Footer