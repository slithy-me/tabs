import './style'
import React, {
  Children, cloneElement, createContext,
  useContext, useEffect, useState,
} from 'react'
import PropTypes from 'prop-types'

const TabContext = createContext()

const Tabs = ({
  children, className, defaultTab = 0, ...props
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div
        className={
          ['component-tabs', className].filter(el => el != null).join(' ')
        }
        {...props}
      >
        {children}
      </div>
    </TabContext.Provider>
  )
}

const TabsList = ({ children, className, ...props }) => {
  const { activeTab, setActiveTab } = useContext(TabContext)

  useEffect(() => {
    // activeTab is a string; find the matching tabIndex, else use tabIndex:0
    if (isNaN(activeTab)) {
      const tabIndex = Children.toArray(children).findIndex(child => child.props.tabName === activeTab)
      if (tabIndex !== -1) {
        return setActiveTab(activeTab)
      } else {
        return setActiveTab(0)
      }
    }

    // activeTab is invalid; default to tabIndex:0
    if (!isNaN(activeTab) && activeTab > Children.toArray(children).length - 1) {
      return setActiveTab(0)
    }
  }, [activeTab])

  return (
    <ol
      className={
        ['component-tabslist', className].filter(el => el != null).join(' ')
      }
      {...props}
    >
      {Children.toArray(children).map((child, i) => cloneElement(child, {
        tabIndex: i,
      }))}
    </ol>
  )
}

const Tab = ({
  children, className, label, tabIndex, tabName, ...props
}) => {
  const { activeTab, setActiveTab } = useContext(TabContext)

  const handleClick = e => {
    if (tabName) {
      setActiveTab(tabName)
    } else {
      setActiveTab(tabIndex)
    }
  }

  if ((children && children.length === 0) && !label) {
    return null
  }

  return (
    <li
      className={
        [
          'component-tab',
          (activeTab === tabName || activeTab === tabIndex ? 'active-tab' : undefined),
          className
        ].filter(el => el != null).join(' ')
      }
      onClick={handleClick}
      {...props}
    >
      {label || children}
    </li>
  )
}

const TabsFrame = ({ children, className, ...props }) => {
  return (
    <div
      className={
        ['component-tabs-frame', className].filter(el => el != null).join(' ')
      }
      {...props}
    >
      {Children.toArray(children).map((child, i) => cloneElement(child, {
        tabIndex: i,
      }))}
    </div>
  )
}

const TabView = ({
  children, className, forTab, forTabs, tabIndex, ...props
}) => {
  const { activeTab } = useContext(TabContext)

  if ((forTabs && forTabs.indexOf(activeTab) !== -1) || activeTab === forTab || activeTab === tabIndex) {
    return (
      <div
        className={
          ['component-tab-view', className].filter(el => el != null).join(' ')
        }
        {...props}
      >
        {children}
      </div>
    )
  }

  return null
}

Tabs.propTypes = {
  className: PropTypes.string,
  defaultTab: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

TabsList.propTypes = {
  className: PropTypes.string,
}

Tab.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  tabName: PropTypes.string,
}

TabsFrame.propTypes = {
  className: PropTypes.string,
}

TabView.propTypes = {
  className: PropTypes.string,
  forTab: PropTypes.string,
  forTabs: PropTypes.array,
}

export { Tabs, TabsList, TabsFrame, Tab, TabView }
