import React, { useState, useRef, useEffect } from 'react';
import styles from './VideoExperience.module.css';
import { useTranslation } from 'react-i18next';

import introductionVideo from '../../assets/video/introduction.mp4'; 
import background_video_image from '../../assets/images/general/background_video_image.jpg';

const VideoExperience = () => {
    const { t } = useTranslation();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef(null);

    // Update progress bar timeline
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    // Metadata loaded (duration)
    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    // Timeline seek logic
    const handleTimelineChange = (e) => {
        const time = Number(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    // Volume change logic
    const handleVolumeChange = (e) => {
        const vol = Number(e.target.value);
        setVolume(vol);
        if (videoRef.current) {
            videoRef.current.volume = vol;
            videoRef.current.muted = vol === 0;
            setIsMuted(vol === 0);
        }
    };

    // Toggle mute button direct
    const toggleMute = () => {
        if (videoRef.current) {
            const currentMute = !isMuted;
            videoRef.current.muted = currentMute;
            setIsMuted(currentMute);
            if (!currentMute && volume === 0) {
                setVolume(0.5);
                videoRef.current.volume = 0.5;
            }
        }
    };

    const handlePlayClick = (e) => {
        e.stopPropagation(); 
        if (videoRef.current) {
            videoRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(() => {
                    videoRef.current.muted = true;
                    setIsMuted(true);
                    videoRef.current.play().then(() => setIsPlaying(true));
                });
        }
    };

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play().then(() => setIsPlaying(true));
            }
        }
    };

    return (
        <section className={styles.videoSection}>
            <div className={styles.container}>
                
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('video_experience.title')}</h2>
                    <p className={styles.subtitle}>{t('video_experience.subtitle')}</p>
                </div>

                <div className={styles.videoWrapper} style={{ borderRadius: '32px' }}>
                
                    <video
                        ref={videoRef}
                        className={styles.videoElement}
                        src={introductionVideo} 
                        poster={background_video_image}
                        onClick={handleVideoClick}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadedMetadata}
                        onEnded={() => setIsPlaying(false)} 
                        playsInline
                        preload="metadata"
                    />

                    {/* Big Center Play Button Overlay */}
                    {!isPlaying && (
                        <div className={styles.overlay} onClick={handlePlayClick}>
                            <button className={styles.playButton} type="button" aria-label="Play Video">
                                <img src="/icons/video_play.svg" alt="Play" />
                            </button>
                        </div>
                    )}

                    {/* Custom Minimalist Controls Menu */}
                    <div className={`${styles.customControls} ${isPlaying ? styles.hideOnLeave : ''}`}>
                        
                        {/* Custom Input Timeline */}
                        <div className={styles.timelineContainer}>
                            <input 
                                type="range" 
                                min={0} 
                                max={duration || 100} 
                                value={currentTime}
                                onChange={handleTimelineChange}
                                className={styles.timelineSlider}
                                style={{
                                    background: `linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) ${(currentTime / (duration || 1)) * 100}%, rgba(255, 255, 255, 0.3) ${(currentTime / (duration || 1)) * 100}%, rgba(255, 255, 255, 0.3) 100%)`
                                }}
                            />
                        </div>

                        <div className={styles.controlsRow}>
                            {/* Play/Pause Minimal Toggle */}
                            <button type="button" className={styles.controlBtn} onClick={handleVideoClick}>
                                {isPlaying ? (
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                )}
                            </button>

                            {/* Sound Volume Container */}
                            <div className={styles.volumeContainer}>
                                <button type="button" className={styles.controlBtn} onClick={toggleMute}>
                                    {isMuted || volume === 0 ? (
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                        </svg>
                                    )}
                                </button>
                                <input 
                                    type="range" 
                                    min={0} 
                                    max={1} 
                                    step={0.1} 
                                    value={isMuted ? 0 : volume}
                                    onChange={handleVolumeChange}
                                    className={styles.volumeSlider}
                                    style={{
                                        background: `linear-gradient(to right, #fff 0%, #fff ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.2) ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.2) 100%)`
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default VideoExperience;