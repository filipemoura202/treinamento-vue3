import FeedBackService from './feedbacks'
import mockAxios from 'axios'

jest.mock('axios')

describe('Feedback Service', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should return all feedbacks per type', async () => {
    const resp = {
      pagination: {},
      results: []

    }

    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: resp })
    })

    const response = await FeedBackService(mockAxios).getAll({
      limit: 2,
      offset: 0
    })
    expect(response.data).toHaveProperty('pagination')
    expect(response.data).toHaveProperty('results')
    expect(response).toMatchSnapshot()
  })

  it('Should return a summary of feedbacks', async () => {
    const summary = {
      all: 7,
      idea: 3,
      issue: 3,
      other: 0
    }

    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: summary })
    })

    const response = await FeedBackService(mockAxios).getSummary()
    expect(response.data).toHaveProperty('all')
    expect(response.data).toHaveProperty('idea')
    expect(response.data).toHaveProperty('issue')
    expect(response.data).toHaveProperty('other')
    expect(response).toMatchSnapshot()
  })
})
