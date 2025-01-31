import 'dotenv/config';

const apiKey = process.env.API_KEY;
const apiToken = process.env.TOKEN;
const memberId = process.env.MEMBER_ID;
const apiBaseUrl = process.env.API_BASE_URL;

/**
 * The following solution allows you to delete all boards,
 * the feauture that I did not find natively supported by TRELLO
 */
const getMemberBoards = async (memberId, apiKey, apiToken) => {
    const url = `${apiBaseUrl}/1/members/${memberId}/boards?fields=name,id&key=${apiKey}&token=${apiToken}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const boards = await response.json();
        console.log(`Found ${boards.length} boards`);

        for (const board of boards) {
            await deleteBoard(board.id);
        }
    } catch (error) {
        console.error('Failed to fetch Board member:', error.message);
    }
};

const deleteBoard = async (boardId) => {
    const url = `${apiBaseUrl}/1/boards/${boardId}?key=${apiKey}&token=${apiToken}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Failed to delete board ${boardId}: ${response.statusText}`);
        }

        console.log(`Deleted board ${boardId}`);
    } catch (error) {
        console.error(error.message);
    }
};

getMemberBoards(memberId, apiKey, apiToken);



// console.log(process.cwd());
// console.log('=============================');
// console.log(test);
// console.log('=============================');