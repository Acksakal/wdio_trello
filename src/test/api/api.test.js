import { expect } from "chai";
import { boardAPI } from './board.api-factory.js';

describe('Module 08. Trello API Requests with Supertest, Mocha and chai.', () => {
  let createdBoardId; 

  it('should create a new board', async () => {
    const boardName = 'API Test Board';
    await boardAPI.create(boardName)
      .expect(200)
      .expect(createBoardResponse => {
        expect(createBoardResponse.body).to.have.property('id');
        createdBoardId = createBoardResponse.body.id; 
      })
  });

  it('should get the created board details', async () => {
      
    await boardAPI.get(createdBoardId)
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(getBoardResponse => {
        expect(getBoardResponse.body).to.have.property('name', 'API Test Board');
        expect(getBoardResponse.request.header).to.have.property('Accept', 'application/json');
      })
  });

  it('should update the board name', async () => {
    const newName = 'Updated API Test Board'; 
    await boardAPI.updateName(createdBoardId, newName)
      .expect(200)
      .expect(updateBoardNameResponse => {
        expect(updateBoardNameResponse.body).to.have.property('name', newName); 
      })    
    });
  
  it('should delete the created board', async () => {
    await boardAPI.delete(createdBoardId)
      .expect(200)
      .expect(deleteBoardResponse => {
        expect(deleteBoardResponse.body).to.have.property('_value', null); 
      })
  });
});
