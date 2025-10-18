export default function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '24px', fontFamily: 'Meslo, monospace', color: 'white' }}>
        <h1 style={{ margin: 0 }}>Your Name</h1>
        <p style={{ margin: 0, fontSize: '16px' }}>Creative Developer</p>
      </div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px', color: 'white' }}>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '15px' }}>GitHub</a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '15px' }}>LinkedIn</a>
        <a href="mailto:your-email@example.com" style={{ color: 'white' }}>Contact</a>
      </div>
    </div>
  )
}