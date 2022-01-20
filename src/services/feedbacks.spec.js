import mockAxios from 'axios'
import FeedbacksService from './feedbacks'

jest.mock('axios')

describe('Feedbacks Service', () => {
  it('Should return all feedbacks per type', async () => {
    const resp = {
      pagination: {},
      results: []
    }

    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: resp })
    })

    const response = await FeedbacksService(mockAxios).getAll({
      limit: 5,
      offset: 0
    })
    expect(response.data).toHaveProperty('pagination')
    expect(response.data).toHaveProperty('results')
    expect(response).toMatchSnapshot()
  })
})
