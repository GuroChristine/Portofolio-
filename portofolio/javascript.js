export default function Home({data}) {
    console.log(data)

    const postHtml= data.map ((post,i) => {
        return(
            <p key={post.id}>{post.title.rendered}</p>
        )
    })

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
            </Head>
        </div>
    )
}
export async function getServerSideProps(context) {
    const res = await fetch (``)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props:{
            data
        },
    }
}
document.getElementsByClassName(article) [0]
addEventListener("click", function(){
    this.window.open("https://github.com/Noroff-FEU-Assignments/cross-course-project-GuroChristine")
})
document.getElementsByClassName(article) [1]
addEventListener("click", function(){
    this.window.open("https://github.com/GuroChristine/semesterproject1/tree/main/Semester%20project%201")
})
document.getElementsByClassName(article) [2]
addEventListener("click", function(){
    this.window.open("https://github.com/Noroff-FEU-Assignments/project-exam-1-GuroChristine")
})