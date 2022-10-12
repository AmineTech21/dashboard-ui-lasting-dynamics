import getNews from '../api/getNews';

describe('API Testing', () => {
    it('8 news should be rendered after the app start', async () => {
        const news = await getNews('https://saurav.tech/NewsAPI/everything/cnn.json');
        expect(news).toHaveLength(8);
    });
});
