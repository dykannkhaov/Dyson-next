function Section(props) {
  return (
    <section
      className={`w-screen ${props.className}`}
      style={{
        backgroundImage: `url("https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/floorcare/sticks/v15-detect/homepage-banner/00-V15-%20Homepage-hero-CORE-LB.jpg?$responsive$&cropPathE=tablet&fit=stretch,1&fmt=pjpeg&wid=1024")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}
    >
      {props.children}
    </section>
  )
}

export default Section