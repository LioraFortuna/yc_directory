import SearchForm from '@/app/components/SearchForm';
import { title } from 'process';
import StartupCard from '@/app/components/StartupCard';

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>  }) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    Views: 55,
    author: {_id:1, name:'Michael'},
    _id: 1,
    description: 'This is a description',
    image:"https://images.unsplash.com/photo-1603356033288-acfcb54801e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJvYm90aWNzfGVufDB8fDB8fHww",
    category: "Robot",
    title: "We Robots",
  }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs </h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
        <SearchForm query={query}/>
      </section>
      
      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for "${query}"` : 'All Starups'}
        </p>

        <ul className='mt-7 card_grid'>
           {posts ?. length > 0 ? (
            posts.map((StartupCardType, number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
           ) : ( <p className='no-results'>No startup found </p> 

           )}
        </ul>
      </section>
    </>
  );
}
