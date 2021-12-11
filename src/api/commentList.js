import axios from "axios";

axios.defaults.baseURL = "http://54.180.125.34:3000";
// const api = axios.create({
//   baseURL: "http://54.180.125.34:3000",
//   headers: {
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// });

export const commentApi = {
    comment : function (data) {
        return axios({
            method:'GET',
            url:`/api/detail/comment`,
            //FIXME: data : data였다!
            data : {},
            // headers : {'content-type' : 'application/json;charset=UTF-8'},
        })
    },
    addComment: (card_id, date, comment) => {
        return axios({
            method: 'POST',
            url:`/api/detail/write/${card_id}`,
            data: { date: date, comment: comment }
        })
    },
    deleteComment: (comment_id) => {
        return({
            method:'DELETE',
            url:"/api/detail/delete/:comment_id",
            data:{comment_id}
        })
    }
}
// import axios from "axios";

// //아마 url 넣는곳?


// export const commentApi = {
//     comment: (data) => {api.get("/api/detail/comment")},
//   addComment: (card_id, date, comment) =>
//     api.post(`/api/detail/write/${card_id}`, { date: date, comment: comment }),
//   deleteComment: (comment_id) => api.delete("/api/detail/delete/:comment_id"),
// };