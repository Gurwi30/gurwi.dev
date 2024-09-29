
export default function Projects() {
    return (
        <section id="projects">
            <div className="not-text grid gap-y-8 h-screen md:grid-cols-4">
                {
                    [...Array(8)].fill(undefined)
                    .map(_ => <div className="">ABC</div>)
                }
            </div>
        </section>
    )
}