const Section = ({children, classes='', id='', ref}) => {
  return (
    
    <section ref={ref} id={id} className={`relative min-h-screen w-full flex flex-col ${classes}`}> 
        {children}
    </section>

  )
}

export default Section