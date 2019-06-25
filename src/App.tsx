import React, { Component, ReactNode } from 'react'
import style from './App.module.scss'

export interface AppProps {}

export interface AppState {}

export default class App extends Component<AppProps, AppState> {
  render (): ReactNode {
    return (
      <div className={style.root}>
        React Template
      </div>
    )
  }
}
