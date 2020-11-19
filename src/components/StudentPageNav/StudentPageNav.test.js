import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import StudentPageNav from './StudentPageNav'

describe(`StudentPageNav component`, () => {
  it('renders a .StudentPageNav by default', () => {
    const wrapper = shallow(<StudentPageNav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // enzyme doesn't support React.createContext
  it.skip('renders a h3 with folder name when in props', () => {
    const props = {
      match: {
        params: {
          studentId: 'test-student-id'
        }
      }
    }
    const context = {
      students: [{ id: 'test-student-id', rostersId: 'test-roster-id' }],
      rosters: [{ id: 'test-folder-id', name: 'Important' }]
    }

    const h3 = shallow(<StudentPageNav {...props} />, context)
      .find('.StudentPageNav__folder-name')
    expect(toJson(h3)).toMatchSnapshot()
  })
})
