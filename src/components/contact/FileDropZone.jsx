import { useState, useRef, useCallback } from 'react'
import { useToast } from '../../context/ToastContext'
import './FileDropZone.css'

const STORAGE_KEY = 'portfolio_assets'

function loadAssets() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch (e) {
    console.error('Failed to load assets from localStorage:', e)
    return {}
  }
}

function saveAssets(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (e) {
    console.error('Failed to save assets to localStorage:', e)
  }
}

export default function FileDropZone({ type, label, accept }) {
  const [dragOver, setDragOver] = useState(false)
  const [file, setFile] = useState(() => {
    const assets = loadAssets()
    return assets[type] || null
  })
  const inputRef = useRef(null)
  const { addToast } = useToast()

  const processFile = useCallback((f) => {
    if (!f) return
    const reader = new FileReader()
    reader.onload = (e) => {
      const data = { name: f.name, size: f.size, type: f.type, data: e.target.result }
      const assets = loadAssets()
      assets[type] = data
      saveAssets(assets)
      setFile(data)
      addToast(`${f.name} uploaded successfully.`, 'success')
    }
    reader.readAsDataURL(f)
  }, [type, addToast])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    setDragOver(false)
    const f = e.dataTransfer.files[0]
    if (f) processFile(f)
  }, [processFile])

  const handleInput = useCallback((e) => {
    const f = e.target.files[0]
    if (f) processFile(f)
  }, [processFile])

  const handleRemove = useCallback(() => {
    const assets = loadAssets()
    delete assets[type]
    saveAssets(assets)
    setFile(null)
  }, [type])

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes}B`
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(0)}KB`
    return `${(bytes / 1048576).toFixed(1)}MB`
  }

  return (
    <div className="dropzone-wrapper">
      <p className="dropzone-label">{label}</p>
      {file ? (
        <div className="dropzone-file">
          <span className="dropzone-file-name">{file.name}</span>
          <span className="dropzone-file-size">{formatSize(file.size)}</span>
          <button className="dropzone-remove" onClick={handleRemove} aria-label="Remove file">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      ) : (
        <div
          className={`dropzone-area ${dragOver ? 'drag-over' : ''}`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <input ref={inputRef} type="file" accept={accept} onChange={handleInput} hidden />
          <p className="dropzone-text">
            <span className="dropzone-link">Click to upload</span> or drag & drop
          </p>
          <p className="dropzone-hint">{accept}</p>
        </div>
      )}
    </div>
  )
}
