export class App extends Component {
  state = {
    searchData: '',
    images: [],
    page: 0,
    largeImage: '',
    showModal: false,
    isLoading: false,
    error: null,
  };
  componentDidUpdate(prevState, nextState) {
    const prevPage = prevState.page;
    const prevSearchData = prevState.searchData;
    const { searchData, page, image } = this.state;
    if (prevPage !== page || prevSearchData !== searchData) {
      try {
        this.setState({ isLoading: true });
        const response = fetchImagesWithQuery(searchData, page);
        response.then(data => {
          data.data.hits.length === 0
            ? toast.error('Nothing found')
            : data.data.hits.forEach(({ id, webformatURL, largeImageURL }) => {
                !images.some(image => image.id === id) &&
                  this.setState(({ images }) => ({
                    images: [...images, { id, webformatURL, largeImageURL }],
                  }));
              });
          this.setState({ isLoading: false });
        });
      } catch (error) {
        this.setState({ error, isLoading: false });
      } finally {
      }
    }
  }
}
onSumit = searchData => {
  if (searchData.trim() === '') {
    return toast.error('Enter the meaning for search');
  } else if (searchData === this.state.searchData) {
    return;
  }
  this.setState({
    searchData: searchData,
    page: 1,
    images: [],
  });
};
nextPage = () => {
  this.setState(({page}) => ({page: page+1}))
}
openModal = index => {
  this.setState(({ images }) => ({
    showModal: true,
    largeImage: images[index].largeImageURL,
  }))
}
toogleModal = () => {
  this.setState(({ showModal }) => ({ showModal: !showModal }))
};
render() {
  const { toogleModal, openModal, nextPage, onSumit } = this;
  const { images, isLoading, showModal, largeImage } = this.state;
  return (
    <div className={s.App}>
      
</div>
  )
}