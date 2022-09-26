<template>
  <div>
    <div>
        <h1>게시글 글쓰기</h1>
        <p>제목 : <input v-model="title" /></p>
        <p>내용 : <input v-model="content" /></p>
        <button @click="postWrite">작성 완료</button>
        <button @click="postDataGet">test</button>
    </div>
    <div>
        <h2>댓글작성</h2>
        <p>제목 : <input v-model="comment" /></p>
        <button @click="commentWrite">댓글 작성 완료</button>
    </div>
    <div>
        <button @click="mypageRead">마이페이지 조회 버튼</button>
        <button @click="onePostRead">게시글 하나 조회하기</button>
    </div>
    <div>
        <button @click="userDataRead">사용자 추가데이터 조회하기</button>
    </div>
    <div>
        <button @click="newPostShow">최신글 보여주기</button>
    </div>
    <div>
        <button @click="removePost">게시글 삭제하기</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            title:'',
            content:'',
            comment:'',
            postId: 1,
            post_id: 1,
        }
    },
    methods: {
        // 게시글 작성 
        postWrite() {
            const host = 'http://13.125.96.150:3000/api/post/write'
            let token = localStorage.getItem('access_token')
            let data = {
                title : this.title,
                content : this.content, 
            }
            axios.post(host,data,{
                headers:{Authorization:`Bearer ${token}`}
            })
            .then((res)=> {
                let token = localStorage.getItem('access_token')
                localStorage.setItem('access_token', token)
                console.log(res.data)
                console.log('게시글 작성 성공')
            })
            .catch((error)=> {
                console.log(error, '게시글 작성 실패!')
            })
        },
        // 게시글 조회
        postDataGet() {
            let token = localStorage.getItem('access_token')
            axios.get('http://13.125.96.150:3000/api/post/main', {
                headers: {Authorization:`Bearer ${token}`}
            })
            .then((res)=> {
                console.log(res)
                console.log('메인페이지 게시글 조회 성공')
                console.log(res.data.post)
                let a = res.data.post
                console.log(...a)
            })
        },
        // 댓글작성하기
        commentWrite() {
            const host = 'http://13.125.96.150:3000/api/comment/write'
            let token = localStorage.getItem('access_token')
            let data = {
                comment: this.comment,
                postId : this.postId
            }
            axios.post(host,data, {
                headers:{Authorization:`Bearer ${token}`}
            })
            .then((res)=> {
                console.log(res)
                console.log('댓글생성 완료')
            })
            .catch ((error) => {
                console.log(error, '댓글 생성 오류!')
            })
        },
        //마이페이지
        mypageRead() {
            const host = 'http://13.125.96.150:3000/api/post/mypage'
            let token = localStorage.getItem('access_token')
            axios.get(host,{
                headers:{Authorization:`Bearer ${token}`}
            })
            .then((res)=> {
                console.log(res)
                console.log('마이페이지 조회 성공')
            })
            .catch((error)=> {
                console.log(error,'마이페이지 조회 실패!')
            })
        },
        // 게시글 하나 조회하기
        onePostRead() {
            const host = `http://13.125.96.150:3000/api/post/main/${this.post_id}`
            let token = localStorage.getItem('access_token')
            let data = {
                post_id : this.post_id
            }
            axios.get(host,data++, {headers:{Authorization:`Bearer ${token}`}})
            .then((res)=> {
                console.log(res)
                console.log('게시글 하나만 조회하기 성공!')
            })
            .catch((error)=> {
                console.log(error, '게시글 하나만 조회하기 실패!')
            })
        },
        // 사용자 추가데이터 조회하기
        userDataRead() {
            const host = 'http://13.125.96.150:3000/api/user/setting'
            let token = localStorage.getItem('access_token')
            axios.get(host, {
                headers: {Authorization:`Bearer ${token}`}
            })
            .then((res)=> {
                console.log(res)
                console.log('사용자 추가데이터 조회하기 성공!')
            })
            .catch((error)=> {
                console.log(error, '사용자 추가데이터 조회하기 실패!')
            })
        },
        // 최신글 보여주기
        newPostShow() {
            const host = 'http://13.125.96.150:3000/api/post/recent'
            let token = localStorage.getItem('access_token')
            axios.get(host, {headers:{Authorization:`Bearer ${token}`}})
            .then((res)=> {
                console.log(res)
                console.log('최신 게시글 보여주기 성공!')
            })
            .catch((error)=> {
                console.log(error, '최신글 보여주기 실패!')
            })
        },
        removePost() {
            const host = 'http://13.125.96.150:3000/api/post/delete'
            let token = localStorage.getItem('access_token')
            let data = {
                postId : this.postId
            }
            axios.delete(host,{headers:{Authorization:`Bearer ${token}`}},{data: {postId:this.postId}})
            .then((res)=> {
                console.log(res)
                console.log('게시글 삭제 완료!')
            })
            .catch((error)=> {
                console.log(error, '게시글 삭제 실패!')
            })
        }
    }
};
</script>

<style>
</style>