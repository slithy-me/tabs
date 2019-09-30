import './style'
import React, { Children, cloneElement, createContext, useContext, useState } from 'react'

const TabContext = createContext()

const Tabs = ({
  children, className, defaultTab = 0, style,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div
        className={
          ['component-tabs', className].filter(el => el != null).join(' ')
        }
        style={{ ...style }}
      >
        <h1>I am Tabs.</h1>
        {children}
      </div>
    </TabContext.Provider>
  )
}


const TabsList = ({ children, className, style }) => {
  return (
    <ol
      className={
        ['component-tabslist', className].filter(el => el != null).join(' ')
      }
      style={{ ...style }}
    >
      {Children.toArray(children).map((child, i) => cloneElement(child, {
        tabIndex: i,
      }))}
    </ol>
  )
}

const Tab = ({
  children, className, label, name, style, tabIndex,
}) => {
  const { activeTab, setActiveTab } = useContext(TabContext)

  const handleClick = e => {
    setActiveTab(tabIndex)
  }

  if ( children.length === 0 && !label) {
    return null
  }

  return (
    <li
      className={
        [
          'component-tab',
          (activeTab === tabIndex ? 'active-tab' : undefined),
          className
        ].filter(el => el != null).join(' ')
      }
      onClick={handleClick}
      style={{ ...style }}
    >
      {label || children}
    </li>
  )
}

const TabsFrame = ({ children, className, style }) => {
  return (
    <div
      className={
        ['component-tabs-frame', className].filter(el => el != null).join(' ')
      }
      style={{ ...style }}
    >
      {Children.toArray(children).map((child, i) => cloneElement(child, {
        tabIndex: i,
      }))}
    </div>
  )
}

const TabView = ({
  children, className, forTab, style, tabIndex,
}) => {
  const { activeTab, setActiveTab } = useContext(TabContext)

  if (activeTab === tabIndex) {
    return (
      <div
        className={
          ['component-tab-view', className].filter(el => el != null).join(' ')
        }
        style={{ ...style }}
      >
        {children}
      </div>
    )
  }

  return null
}

export { Tabs, TabsList, TabsFrame, Tab, TabView }
