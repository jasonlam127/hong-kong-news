import React, { Component }  from 'react';
import InfiniteScroll from 'react-infinite-scroller';


class Technology extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: null,

            items: [],
            hasMore: true
        }
    }

    fetchData(){
        let d = this.state.data.length;
            let item = this.state.items;
            let data = this.state.data;
            let numToPush =0;
            let increment = 6;

            if (d>=increment){
                numToPush =increment;
            }else{
                numToPush = d;
                this.setState({hasMore : false});
            }

            for(let i =0;i<numToPush;i++){
                item.push(data[i]);
            }
            for(let i =0;i<numToPush;i++){
                data.shift();
            }

            this.setState({
                items: item,
                data: data
            });
    }
    
      fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
            this.fetchData();
        }, 1000);
      };

    fetchInitialData = (link) => {

        fetch(link)
        .then(response => response.json())
        .then(result => {
            //console.log(result.articles);
            this.setState({data: result.articles})})
        .catch(error => this.setState({ error }));
    
      }

    componentDidMount(){
        this.fetchInitialData(this.props.link);
    }

    render() {
        if (this.state.error)
            return 
        
            var itemsNews = [];
            this.state.items.map((track, i) => {
                itemsNews.push(
                    <div key = {track.title} className="pure-u-1-1 pure-u-sm-1-2 pure-u-lg-1-3 box"> 
                        <img className = " photo-img " alt= {[i]}  src= {track.urlToImage} ></img>
                        <div>
                            <a className = "text-box" href={track.url} target="view_frame"> {track.title}</a>
                        </div>
                    </div>
                );
            });

        return (
            <div className="pure-g">

              
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.fetchMoreData.bind(this)}
                    hasMore={this.state.hasMore}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    {itemsNews} 
                </InfiniteScroll>

            </div>
        )
    }
} 
export default Technology;