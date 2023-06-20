class ApiFeatures {
    constructor(query, queryStr){
        this.query = query
        this.queryStr = queryStr
    }

    // Search feature
    search(){
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i",
            }
        } : {};
        console.log(keyword)
        this.query = this.query.find({...keyword})
        return this
    }

    // Price filter and Rating
    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;

        // Skip(No of question we need to skip) like navigation 1st->0-5 then 2nd-> 6-10 .....
        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip)
        
        return this;
    }
}

export default ApiFeatures