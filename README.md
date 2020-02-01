# query

> query getCoursesWithFragmens(&#0036;courseID1:Int!, &#0036;courseID2:Int!) {
> course1 : course(id: &#0036;courseID1) {
> ...courseFields
> }
>  
>  course2 : course(id: &#0036;courseID2) {
>    ...courseFields
>  }
>}

#mutation

>mutation updateCourseTopic(&#0036;id: Int!, &#0036;topic: String!) {
>  updateCourseTopic (id: &#0036;id, topic: &#0036;topic) {
>    ...courseFields
>  }
>}

>  fragment courseFields on Course {
>    id
>    title
>    author
>    description
>    topic
>    url
>  }	

#params

>{
>  "id": 1,
>  "topic": "pippo"
>}

#query

>query getSingleCourse(&#0036;courseID: Int!) {
> course(id: &#0036;courseID) {
> title
> author
> description
> topic
> url
>}
>}

#params

>{
> "courseID": 1
> }
