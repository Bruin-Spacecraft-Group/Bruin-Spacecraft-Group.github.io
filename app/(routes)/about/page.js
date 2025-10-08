import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className="pb-10 md:pb-14 mt-60 mb-10 px-10 lg:px-24">
        <div className='relative flex flex-col justify-end h-full'>
          <h1 className='mb-10 text-6xl font-light lg:text-8xl px-wrapper-mobile lg:px-wrapper-desktop hidden-br hidden-br--xl'>
            Empowering Tomorrow's Space Leaders at UCLA
          </h1>
          <p className='text-lg font-extrabold text-light lg:text-l px-wrapper-mobile lg:px-wrapper-desktop hidden-br hidden-br--xl'>
            Where Innovation Meets Passion, and Students from All Disciplines Unite to Pioneer the Future of Space Exploration.
          </p>
        </div>
      </section>
      <section className="pb-10 md:pb-14 mt-40 mb-10 px-10 lg:px-24">
        <div className='relative flex flex-col justify-end h-full'>
          <p className='mb-10 text-2xl lg:text-6xl font-thin px-wrapper-mobile lg:px-wrapper-desktop hidden-br hidden-br--xl'>
            What is BruinSpace?
          </p>
        </div>
        <div className='grid grid-cols-9 max-md:grid-cols-1 gap-6 lg:gap-12 mb-20 place-items-center'>
          <div className='col-span-4'>
            <Image
              src="/pictures/BS_Banner.jpg"
              width={500}
              height={500}
              alt="BruinSpace Banner"
            />
            <br />
            <Image
              src="/pictures/Reactor_Glow.jpg"
              width={500}
              height={500}
              alt="BruinSpace Banner"
            />
          </div>
          <p className='col-span-5'>
            BruinSpace at UCLA is a student-led organization dedicated to fostering innovation, collaboration, and hands-on experience in the field of aerospace engineering. We are more than just a club; we are a community where students from all disciplines—engineering, science, business, arts, and beyond—come together to explore the vast possibilities of space exploration.
            <br /><br />
            Our mission is to empower the next generation of space leaders by providing opportunities to design, develop, and execute real-world space missions. Through our flagship projects, such as CubeSat development and high-altitude balloon payloads, BruinSpace members gain invaluable experience in the full lifecycle of space technology projects—from concept and design to manufacturing, testing, and launch.
            <br /><br />
            Located within the heart of the aerospace industry in Southern California, BruinSpace leverages UCLA’s strong ties with industry leaders, offering students unique opportunities to connect with professionals, secure mentorship, and collaborate on cutting-edge research. Our members are not only building tangible projects; they are also shaping the future of space technology.
            <br /><br />
            BruinSpace is committed to diversity and inclusivity, welcoming students from all backgrounds and academic interests. Whether you're an engineer, a scientist, a business major, or an artist, there’s a place for you in BruinSpace. Our interdisciplinary approach ensures that every member can contribute meaningfully to our projects and initiatives, bringing fresh perspectives and innovative ideas to the table.
            <br /><br />
            Through hands-on projects, educational programs, and industry partnerships, BruinSpace is creating an environment where students can grow, lead, and make a tangible impact on the world of space exploration. We are passionate about what we do, and we invite you to join us as we push the boundaries of what’s possible.
          </p>
        </div>
      </section>
      <section className='pb-10 md:pb-10 mt-20 mb-20'>
        <Image
          src="/bruinspace_overall.png"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={3000}
          height={3000}
        />
      </section>
      <section className="pb-10 md:pb-14 mt-40 mb-10 px-10 lg:px-24">
        <div className='relative flex flex-col justify-end h-full'>
          <p className='mb-10 text-2xl lg:text-6xl font-thin px-wrapper-mobile lg:px-wrapper-desktop hidden-br hidden-br--xl'>
            Admin Leadership
          </p>
        </div>
        <div className='mb-10'>
          {/* Top row - 3 people */}
          <div className='grid grid-cols-3 max-md:grid-cols-1 gap-10 lg:gap-12 mb-10'>
            <div>
              <Image
                src="/pictures/leadership/2025-26 board photos/Jenna.jpg"
                width={500}
                height={500}
                alt="Jenna - President"
              />
              <br />
              <p className='text-center'> <span className='font-semibold'>Jenna</span> <br /> President</p>
            </div>
            <div>
              <Image
                src="/pictures/leadership/2025-26 board photos/Alec.jpg"
                width={500}
                height={500}
                alt="Alec - Internal Vice-President"
              />
              <br />
              <p className='text-center'> <span className='font-semibold'>Alec</span> <br /> Internal Vice-President</p>
            </div>
            <div>
              <Image
                src="/pictures/leadership/2025-26 board photos/Celine.jpg"
                width={500}
                height={500}
                alt="Celine - External Vice-President"
              />
              <br />
              <p className='text-center'> <span className='font-semibold'>Celine</span> <br /> External Vice-President</p>
            </div>
          </div>
          
          {/* Bottom row - 2 people centered */}
          <div className='flex justify-center gap-10 lg:gap-12'>
            <div className='w-1/3 max-w-[500px]'>
              <Image
                src="/pictures/leadership/2025-26 board photos/Mohsen.jpg"
                width={500}
                height={500}
                alt="Mohsen - Marketing Vice-President"
              />
              <br />
              <p className='text-center'> <span className='font-semibold'>Mohsen</span> <br /> Marketing Vice-President</p>
            </div>
            <div className='w-1/3 max-w-[500px]'>
              <Image
                src="/pictures/leadership/2025-26 board photos/Nasser.jpg"
                width={500}
                height={500}
                alt="Nasser - Finance Vice-President"
              />
              <br />
              <p className='text-center'> <span className='font-semibold'>Nasser</span> <br /> Finance Vice-President</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-10 md:pb-14 mt-40 mb-10 px-10 lg:px-24">
        <div className='relative flex flex-col justify-end h-full'>
          <p className='mb-10 text-2xl lg:text-6xl font-thin px-wrapper-mobile lg:px-wrapper-desktop hidden-br hidden-br--xl'>
            Our Mascot - Bru
          </p>
        </div>
        <div className='grid grid-cols-8 max-md:grid-cols-1 gap-6 lg:gap-12 mb-10 place-items-center'>
          <div className='col-span-3'>
            <Image
              src="/icons/bru.png"
              width={500}
              height={500}
              alt="Bru"
            />
          </div>
          <div className='col-span-5'>
            <p>
              The most visible and powerful symbol of our vision is our mascot, Bru. The space bear was inspired by UCLA's Bruin Bear and represents the university's heritage, school spirit, and all that its student body embodies. Bru's space suit represents the club's focus on the various aspects of research and development in the realm of space science and technology, including but not limited to scientific payloads, satelites, and radio communications. Bru in Space is a symbol of BruinSpace's unique approach in space mission studies and design, combining well-focused projects within timelines structured around the framework of the school year with a light-hearted and fun atmosphere for space nerds to get creative and begin to sketch out and build their dream.
            </p>
            <br /><br />
            <p className='text-sm text-light'>
              "The creation of Bru was actually an accident, just like many other wonderful space discoveries! They were supposed to be a funny little background doodle in presentation slide backgrounds, but once the marketing team realized how adorable the character was, I had to evolve this little bear into a full character. The name Bru was chosen because it is a pun for the name of the club (Bru in Space). And now they reside, surrounded by stars and endless possibility, discovering and learning just like the Bruins on Earth.'' <br /><br />- Jeanine Lee, Creator
            </p>
          </div>
        </div>
      </section>
    </main >
  )
}
