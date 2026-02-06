import React, { useState, useEffect, useRef } from 'react';

// -----------------------------------------------------------------------------
// アイコンコンポーネント
// -----------------------------------------------------------------------------
const Icons = {
  Layers: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  ImageIcon: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  ),
  Upload: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  ),
  RefreshCw: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  ),
  Move: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="5 9 2 12 5 15" />
      <polyline points="9 5 12 2 15 5" />
      <polyline points="15 19 12 22 9 19" />
      <polyline points="19 9 22 12 19 15" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
  ),
  Maximize: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  ),
  RotateCw: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  ),
  Smile: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  ),
  Download: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  ),
  AlertCircle: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  ),
  Scissors: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" x2="8.12" y1="4" y2="15.88" />
      <line x1="14.47" x2="20" y1="14.48" y2="20" />
      <line x1="8.12" x2="12" y1="8.12" y2="12" />
    </svg>
  ),
  Target: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Sliders: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="4" x2="20" y1="21" y2="21" />
      <line x1="4" x2="20" y1="14" y2="14" />
      <line x1="4" x2="20" y1="7" y2="7" />
      <circle cx="12" cy="14" r="2" />
      <circle cx="8" cy="7" r="2" />
      <circle cx="16" cy="21" r="2" />
    </svg>
  )
};

// -----------------------------------------------------------------------------
// メインコンポーネント
// -----------------------------------------------------------------------------
const VtuberMaker = () => {
  const [libsLoaded, setLibsLoaded] = useState(false);
  const [bgImage, setBgImage] = useState(null);
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [expressions, setExpressions] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [loadProgress, setLoadProgress] = useState(0); 
  
  // Transform State
  const [transform, setTransform] = useState({
    x: 400,
    y: 300,
    scale: 0.1,
    rotation: 0,
  });

  // Mask State
  const [isMasked, setIsMasked] = useState(false);
  const [maskSettings, setMaskSettings] = useState({
    radius: 300, 
    y: 0,
  });

  // ★ パラメータ管理（動的） ★
  // { id, min, max, default, value, name }
  const [parameters, setParameters] = useState([]);

  // Tickerから最新のStateを参照するためのRef
  const parametersRef = useRef([]);
  useEffect(() => {
    parametersRef.current = parameters;
  }, [parameters]);

  const canvasRef = useRef(null);
  const pixiAppRef = useRef(null);
  const modelRef = useRef(null);
  const modelContainerRef = useRef(null);
  const bgSpriteRef = useRef(null);
  const maskSpriteRef = useRef(null);
  const debugRingRef = useRef(null);

  // ---------------------------------------------------------------------------
  // ライブラリ読み込み
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.crossOrigin = "anonymous";
            script.onload = resolve;
            script.onerror = () => {
                document.head.removeChild(script);
                reject(new Error(`Failed to load script: ${src}`));
            };
            document.head.appendChild(script);
        });
    };

    const loadScriptWithFallback = async (urls) => {
        let lastError;
        for (const url of urls) {
            try {
                await loadScript(url);
                return;
            } catch (e) {
                console.warn(`Failed to load ${url}, trying next fallback...`);
                lastError = e;
            }
        }
        throw lastError;
    };

    const initScripts = async () => {
        try {
            setLoadingText('ライブラリを準備中...');
            
            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js');
            setLoadProgress(20);

            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pixi.js/6.5.9/browser/pixi.min.js');
            setLoadProgress(40);

            // Cubism 5 Core (最新) を読み込む
            await loadScript('https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js');
            setLoadProgress(60);
            
            if (!window.PIXI?.live2d) {
                await loadScript('https://cdn.jsdelivr.net/npm/pixi-live2d-display@0.4.0/dist/cubism4.min.js');
            }
            setLoadProgress(80);
            
            if (!window.FaceMesh) await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js');
            setLoadProgress(100);
            
            if (window.PIXI && window.PIXI.live2d) {
                console.log("All libraries loaded successfully");
                setLibsLoaded(true);
            } else {
                throw new Error("PixiJS or Live2D plugin failed to initialize.");
            }
        } catch (e) {
            console.error("Failed to load libraries", e);
            setErrorMsg(`ライブラリの読み込みに失敗しました: ${e.message}`);
        }
    };

    initScripts();
  }, []);

  // ---------------------------------------------------------------------------
  // PixiJS初期化 & Ticker登録
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!libsLoaded) return;
    if (!window.PIXI || !window.PIXI.live2d) return;

    try {
        window.PIXI.utils.skipHello();
        window.PIXI.live2d.Live2DModel.registerTicker(window.PIXI.Ticker);

        const app = new window.PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0xeeeeee,
            antialias: true,
            preserveDrawingBuffer: true,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
        });

        if (canvasRef.current) {
            canvasRef.current.innerHTML = '';
            canvasRef.current.appendChild(app.view);
        }

        pixiAppRef.current = app;

        // ★★★ 最強更新ループ ★★★
        const priority = -50; // 低い優先度で上書き
        
        app.ticker.add(() => {
            if (!modelRef.current || !modelRef.current.internalModel) return;
            
            const internal = modelRef.current.internalModel;
            const core = internal.coreModel;
            if (!core) return;

            // Stateにある全パラメータを強制適用！
            const currentParams = parametersRef.current;
            
            if (currentParams.length > 0) {
                if (core.setParameterValueById) {
                    // Cubism 4
                    currentParams.forEach(p => {
                        core.setParameterValueById(p.id, p.value);
                    });
                } else if (core.setParamFloat) {
                    // Cubism 2
                    currentParams.forEach(p => {
                        core.setParamFloat(p.id, p.value);
                    });
                }

                // 更新を反映させる
                if (modelRef.current.update) {
                    modelRef.current.update(app.ticker.deltaMS);
                }
            }
        }, null, priority);

        return () => {
            try {
                if (app && app.renderer) {
                    app.destroy(true, { children: true, texture: true, baseTexture: true });
                }
            } catch (e) { console.warn(e); }
        };
    } catch (e) {
        console.error(e);
        setErrorMsg("描画エンジンの初期化に失敗しました。");
    }
  }, [libsLoaded]);

  // Transform反映
  useEffect(() => {
    if (modelContainerRef.current) {
      modelContainerRef.current.position.set(transform.x, transform.y);
      modelContainerRef.current.scale.set(transform.scale);
      modelContainerRef.current.rotation = transform.rotation * (Math.PI / 180);
    }
  }, [transform]);

  // マスク処理
  useEffect(() => {
    if (!modelContainerRef.current || !pixiAppRef.current) return;

    const container = modelContainerRef.current;
    const app = pixiAppRef.current;

    // Clean up
    if (maskSpriteRef.current) {
        container.mask = null;
        if (maskSpriteRef.current.parent === container) {
            container.removeChild(maskSpriteRef.current);
        }
        maskSpriteRef.current.destroy({ texture: true, baseTexture: true });
        maskSpriteRef.current = null;
    }
    if (debugRingRef.current) {
        if(debugRingRef.current.parent === container) {
            container.removeChild(debugRingRef.current);
        }
        debugRingRef.current.destroy();
        debugRingRef.current = null;
    }

    if (isMasked) {
        const graphics = new window.PIXI.Graphics();
        graphics.beginFill(0xFFFFFF);
        graphics.drawCircle(0, maskSettings.y, maskSettings.radius);
        graphics.endFill();

        const texture = app.renderer.generateTexture(graphics, { resolution: 2, scaleMode: window.PIXI.SCALE_MODES.LINEAR });
        
        const maskSprite = new window.PIXI.Sprite(texture);
        maskSprite.anchor.set(0.5, 0.5);
        maskSprite.position.set(0, maskSettings.y);

        container.addChild(maskSprite);
        container.mask = maskSprite;
        maskSpriteRef.current = maskSprite;

        const ring = new window.PIXI.Graphics();
        ring.lineStyle(4, 0xFF0000, 0.3);
        ring.drawCircle(0, maskSettings.y, maskSettings.radius);
        container.addChild(ring);
        debugRingRef.current = ring;

        graphics.destroy(); 
    }
  }, [isMasked, maskSettings, model]);

  // 画像アップロード
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imgUrl = event.target.result;
      setBgImage(imgUrl);
      
      const app = pixiAppRef.current;
      if (!app) return;
      
      if (bgSpriteRef.current) {
        app.stage.removeChild(bgSpriteRef.current);
      }

      const bgTexture = window.PIXI.Texture.from(imgUrl);
      const bgSprite = new window.PIXI.Sprite(bgTexture);
      
      bgTexture.baseTexture.on('loaded', () => {
        const maxWidth = 800;
        const maxHeight = 600;
        let newWidth = bgTexture.width;
        let newHeight = bgTexture.height;

        if (newWidth > maxWidth || newHeight > maxHeight) {
             const ratio = Math.min(maxWidth / newWidth, maxHeight / newHeight);
             newWidth *= ratio;
             newHeight *= ratio;
             bgSprite.width = newWidth;
             bgSprite.height = newHeight;
        }

        app.renderer.resize(newWidth, newHeight);
        
        setTransform(prev => ({
            ...prev,
            x: newWidth / 2,
            y: newHeight / 2
        }));
      });

      bgSprite.zIndex = 0;
      app.stage.addChildAt(bgSprite, 0);
      bgSpriteRef.current = bgSprite;
    };
    reader.readAsDataURL(file);
  };

  // ZIPファイルアップロード (Data URI + パラメータ自動抽出 + VTS設定反映)
  const handleZipUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const JSZip = window.JSZip;
    if (!JSZip) return;

    setLoading(true);
    setLoadingText('ZIPファイルを解析中...');
    setErrorMsg('');

    if (window.PIXI && window.PIXI.utils) {
        window.PIXI.utils.clearTextureCache();
    }

    try {
      const jsZip = new JSZip();
      const zip = await jsZip.loadAsync(file);
      
      let modelConfigFile = Object.keys(zip.files).find(path => path.toLowerCase().endsWith('.model3.json'));
      if (!modelConfigFile) throw new Error('ZIP内に .model3.json が見つかりません。');

      // VTube Studioの設定ファイル(.vtube.json)も探す
      let vtubeConfigFile = Object.keys(zip.files).find(path => path.toLowerCase().endsWith('.vtube.json'));
      let vtubeSettings = null;
      if (vtubeConfigFile) {
          const vtubeText = await zip.files[vtubeConfigFile].async('string');
          try {
              vtubeSettings = JSON.parse(vtubeText);
              console.log("VTube Studio config loaded:", vtubeSettings);
          } catch(e) {
              console.warn("Failed to parse .vtube.json", e);
          }
      }

      setLoadingText('リソースを展開中...');

      const fileMap = {};
      const filePaths = Object.keys(zip.files);
      
      await Promise.all(filePaths.map(async (path) => {
        if (!zip.files[path].dir) {
           let mime = 'application/octet-stream';
           const lowerPath = path.toLowerCase();
           if(lowerPath.endsWith('.png')) mime = 'image/png';
           if(lowerPath.endsWith('.jpg') || lowerPath.endsWith('.jpeg')) mime = 'image/jpeg';
           if(lowerPath.endsWith('.json') || lowerPath.endsWith('.model3.json')) mime = 'application/json';
           if(lowerPath.endsWith('.moc3')) mime = 'application/octet-stream';
           if(lowerPath.endsWith('.mp3')) mime = 'audio/mpeg';
           if(lowerPath.endsWith('.wav')) mime = 'audio/wav';

           const base64 = await zip.files[path].async('base64');
           const dataUrl = `data:${mime};base64,${base64}`;
           
           const normalizedPath = path.replace(/\\/g, '/');
           fileMap[normalizedPath] = dataUrl;
           fileMap[normalizedPath.toLowerCase()] = dataUrl;
        }
      }));

      const modelJsonText = await zip.files[modelConfigFile].async('string');
      let modelJsonObj = JSON.parse(modelJsonText);
      
      const normalizedConfigPath = modelConfigFile.replace(/\\/g, '/');
      const basePath = normalizedConfigPath.includes('/') 
            ? normalizedConfigPath.substring(0, normalizedConfigPath.lastIndexOf('/') + 1) 
            : '';

      const resolveFileUrl = (targetPath) => {
          let normalizedTarget = targetPath.replace(/\\/g, '/').replace(/^\.\//, '');
          const fullPath = basePath + normalizedTarget;
          if (fileMap[fullPath]) return fileMap[fullPath];
          if (fileMap[fullPath.toLowerCase()]) return fileMap[fullPath.toLowerCase()];
          if (fileMap[normalizedTarget]) return fileMap[normalizedTarget];
          if (fileMap[normalizedTarget.toLowerCase()]) return fileMap[normalizedTarget.toLowerCase()];
          const targetFileName = normalizedTarget.split('/').pop().toLowerCase();
          const fuzzyMatch = Object.keys(fileMap).find(k => k.toLowerCase().endsWith('/' + targetFileName) || k.toLowerCase() === targetFileName);
          if (fuzzyMatch) return fileMap[fuzzyMatch];
          return null;
      };

      const replacePathsRecursively = (obj) => {
        for (const key in obj) {
          const value = obj[key];
          if (typeof value === 'string') {
             if (value.length < 4) continue;
             const dataUrl = resolveFileUrl(value);
             if (dataUrl) obj[key] = dataUrl;
          } else if (typeof value === 'object' && value !== null) {
            replacePathsRecursively(value);
          }
        }
      };

      replacePathsRecursively(modelJsonObj);
      modelJsonObj.url = `model_${Date.now()}.model3.json`;

      setLoadingText('Live2Dモデルを構築中...');
      const { Live2DModel } = window.PIXI.live2d;
      
      if (modelContainerRef.current) {
        pixiAppRef.current.stage.removeChild(modelContainerRef.current);
        modelContainerRef.current.destroy({ children: true });
        modelContainerRef.current = null;
        modelRef.current = null;
      }

      // オートプレイは切る
      const model = await Live2DModel.from(modelJsonObj, { autoInteract: false });
      model.autoplay = false;
      model.anchor.set(0.5, 0.5);
      
      // ★★★★ 自動機能の完全無力化 (初期化直後) ★★★★
      const disableAutoMotions = () => {
          if (model.internalModel) {
              const noop = () => {};
              try {
                  if (model.internalModel.eyeBlink) model.internalModel.eyeBlink.update = noop;
                  if (model.internalModel.breath) model.internalModel.breath.update = noop;
                  if (model.internalModel.physics) model.internalModel.physics.update = noop;
                  if (model.internalModel.dragManager) model.internalModel.dragManager.update = noop;
                  console.log("Auto motions neutralized.");
              } catch(e) {
                  console.warn("Failed to disable motions:", e);
              }
          }
      };
      
      // 生成直後に一回実行
      disableAutoMotions();

      // パラメータ抽出と初期値セット
      // readyイベントを待たずに、生成直後の状態で抽出を試みる
      let extractedParams = [];
      const core = model.internalModel.coreModel;
      
      if (core) {
          let ids = [];
          let maxValues = [];
          let minValues = [];
          let defaultValues = [];

          if (core.parameters) {
             // Cubism 4 (Object access)
             ids = core.parameters.ids;
             maxValues = core.parameters.maximumValues;
             minValues = core.parameters.minimumValues;
             defaultValues = core.parameters.defaultValues;
          } else if (core.getParamIds) {
             // Cubism 2 (Function access)
             ids = core.getParamIds();
             maxValues = core.getParamMaximumValues();
             minValues = core.getParamMinimumValues();
             defaultValues = core.getParamDefaultValues();
          }
          
          console.log("Raw Param IDs:", ids);

          if (ids && ids.length > 0) {
              extractedParams = ids.map((id, index) => {
                  // 現在の値を初期値として取得
                  let currentValue = defaultValues[index];
                  try {
                      if (core.getParameterValueById) {
                          currentValue = core.getParameterValueById(id);
                      } else if (core.getParamFloat) {
                          currentValue = core.getParamFloat(id);
                      }
                  } catch(e) { /* ignore */ }

                  // VTube Studioの設定があれば名前を上書き (OutputLive2Dが一致するもの)
                  let displayName = id;
                  if (vtubeSettings && vtubeSettings.ParameterSettings) {
                      const vtsSetting = vtubeSettings.ParameterSettings.find(s => s.OutputLive2D === id);
                      if (vtsSetting) {
                          displayName = vtsSetting.Name;
                      }
                  }

                  return {
                      id: id,
                      min: minValues[index],
                      max: maxValues[index],
                      default: defaultValues[index],
                      value: currentValue,
                      name: displayName
                  };
              });
          }
      }
      
      console.log("Extracted Parameters:", extractedParams);
      setParameters(extractedParams);
      setLoading(false);

      const container = new window.PIXI.Container();
      container.addChild(model);
      
      const rendererHeight = pixiAppRef.current.renderer.height;
      const initialScale = (rendererHeight * 0.5) / model.height;
      
      container.scale.set(initialScale);
      container.position.set(pixiAppRef.current.renderer.width / 2, rendererHeight / 2);

      container.interactive = true; 
      container.buttonMode = true; 
      container.on('pointerdown', onDragStart)
               .on('pointerup', onDragEnd)
               .on('pointerupoutside', onDragEnd)
               .on('pointermove', onDragMove);

      pixiAppRef.current.stage.addChild(container);
      
      modelRef.current = model;
      modelContainerRef.current = container;
      setModel(model);
      
      setTransform({
          x: container.position.x,
          y: container.position.y,
          scale: initialScale,
          rotation: 0
      });

      if (model.internalModel && model.internalModel.settings.expressions) {
         setExpressions(model.internalModel.settings.expressions.map(e => e.Name));
      } else {
        setExpressions([]);
      }

    } catch (err) {
      console.error(err);
      setErrorMsg('読み込みエラー: ' + err.message);
      setLoading(false);
    }
  };

  // パラメータ変更ハンドラ
  const handleParamChange = (id, value) => {
      setParameters(prevParams => 
          prevParams.map(p => p.id === id ? { ...p, value: parseFloat(value) } : p)
      );
  };

  // ドラッグ操作
  const dragData = useRef({ dragging: false, data: null, offset: {x:0, y:0} });
  
  const onDragStart = (event) => {
    const container = event.currentTarget; 
    dragData.current.dragging = true;
    dragData.current.data = event.data;
    const newPosition = dragData.current.data.getLocalPosition(container.parent);
    dragData.current.offset.x = newPosition.x - container.x;
    dragData.current.offset.y = newPosition.y - container.y;
  };

  const onDragEnd = () => {
    dragData.current.dragging = false;
    dragData.current.data = null;
  };

  const onDragMove = () => {
    if (dragData.current.dragging && modelContainerRef.current) {
      const container = modelContainerRef.current;
      const newPosition = dragData.current.data.getLocalPosition(container.parent);
      const newX = newPosition.x - dragData.current.offset.x;
      const newY = newPosition.y - dragData.current.offset.y;
      
      container.position.set(newX, newY);
      setTransform(prev => ({...prev, x: newX, y: newY}));
    }
  };

  const detectFaceAndAlign = async () => {
    if (!bgImage) { alert("背景画像をアップロードしてください"); return; }
    if (!modelRef.current) { alert("モデルをアップロードしてください"); return; }

    setLoading(true);
    setLoadingText('AIが顔を検出中...');

    try {
        const faceMesh = new window.FaceMesh({locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`});
        faceMesh.setOptions({maxNumFaces: 1, refineLandmarks: true, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5});

        faceMesh.onResults((results) => {
            if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
                const landmarks = results.multiFaceLandmarks[0];
                const canvasW = pixiAppRef.current.renderer.width;
                const canvasH = pixiAppRef.current.renderer.height;

                const nose = landmarks[1];
                const centerX = nose.x * canvasW;
                const centerY = nose.y * canvasH;

                const leftEye = landmarks[33];
                const rightEye = landmarks[263];
                const dx = (rightEye.x - leftEye.x) * canvasW;
                const dy = (rightEye.y - leftEye.y) * canvasH;
                const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);
                const angleRad = angleDeg * (Math.PI / 180);

                const rightCheek = landmarks[234];
                const leftCheek = landmarks[454];
                const photoFaceWidthPx = Math.hypot(
                    (leftCheek.x - rightCheek.x) * canvasW, 
                    (leftCheek.y - rightCheek.y) * canvasH
                );

                const model = modelRef.current;
                
                let modelFaceWidthPx = model.internalModel.width * 0.35; 
                let modelFaceCenterY = -(model.internalModel.height * 0.25); 

                const targetScale = (photoFaceWidthPx / modelFaceWidthPx) * 1.2;

                const photoNoseX = nose.x * canvasW;
                const photoNoseY = nose.y * canvasH;

                const rotatedOffsetX = -modelFaceCenterY * Math.sin(angleRad);
                const rotatedOffsetY = modelFaceCenterY * Math.cos(angleRad);

                const targetX = photoNoseX - (rotatedOffsetX * targetScale);
                const targetY = photoNoseY - (rotatedOffsetY * targetScale);

                setTransform({
                    x: targetX,
                    y: targetY,
                    scale: targetScale,
                    rotation: angleDeg
                });

                setMaskSettings({
                    y: modelFaceCenterY,
                    radius: modelFaceWidthPx * 0.7
                });
                setIsMasked(true);

                alert(`検出完了！\nスケール: ${targetScale.toFixed(2)}倍\n位置合わせ＆マスク完了しました！✨`);

            } else {
                alert("顔が検出されませんでした。");
            }
            setLoading(false);
        });

        const img = new Image();
        img.src = bgImage;
        img.crossOrigin = "Anonymous";
        img.onload = async () => { await faceMesh.send({image: img}); };

    } catch (e) {
        console.error(e);
        alert("顔検出エラー: " + e.message);
        setLoading(false);
    }
  };

  const playExpression = (expName) => {
      if(modelRef.current) modelRef.current.expression(expName);
  }

  const handleDownload = () => {
      if(pixiAppRef.current) {
          if(debugRingRef.current) debugRingRef.current.visible = false;
          
          pixiAppRef.current.renderer.render(pixiAppRef.current.stage);
          const canvas = pixiAppRef.current.view;
          const link = document.createElement('a');
          link.download = 'vtuber_image.png';
          link.href = canvas.toDataURL('image/png');
          link.click();

          if(debugRingRef.current) debugRingRef.current.visible = true;
      }
  }

  if (!libsLoaded) {
      return (
        <div className="flex flex-col h-screen items-center justify-center bg-gray-50 text-gray-600 space-y-4">
            <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            <div className="text-center">
                <p className="font-bold text-lg">ライブラリを読み込み中...</p>
                <p className="text-sm text-gray-400 mt-1">{loadProgress}% 完了</p>
                {errorMsg && <p className="text-red-500 text-sm mt-2">{errorMsg}</p>}
            </div>
        </div>
      );
  }

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800 overflow-hidden">
      {/* サイドバー */}
      <div className="w-80 bg-white shadow-xl flex flex-col z-10 overflow-y-auto border-r border-gray-200">
        <div className="p-5 border-b border-gray-100 bg-white sticky top-0 z-20">
          <h1 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
            <Icons.Layers className="w-6 h-6" />
            2.5D VTuber Maker
          </h1>
          <p className="text-xs text-gray-400 mt-1">Beta v6.1</p>
        </div>

        <div className="p-5 space-y-8">
          
          <section className="space-y-3">
            <h2 className="text-sm font-bold text-gray-700 flex items-center gap-2">
               <span className="flex items-center justify-center w-5 h-5 bg-gray-200 rounded-full text-xs">1</span>
               背景写真を選択
            </h2>
            <label className="group flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-indigo-50 hover:border-indigo-400 transition-all">
              <div className="flex flex-col items-center">
                 <Icons.ImageIcon className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 mb-1"/>
                 <span className="text-xs text-gray-500 group-hover:text-indigo-600 font-medium">画像をクリックして選択</span>
              </div>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </section>

          <section className="space-y-3">
            <h2 className="text-sm font-bold text-gray-700 flex items-center gap-2">
               <span className="flex items-center justify-center w-5 h-5 bg-gray-200 rounded-full text-xs">2</span>
               モデル (ZIP)
            </h2>
            <label className="group flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-indigo-50 hover:border-indigo-400 transition-all">
              <div className="flex flex-col items-center px-4 text-center">
                 <Icons.Upload className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 mb-1"/>
                 <span className="text-xs text-gray-500 group-hover:text-indigo-600 font-medium leading-tight">
                    .model3.jsonを含む<br/>ZIPファイルを選択
                 </span>
              </div>
              <input type="file" accept=".zip" onChange={handleZipUpload} className="hidden" />
            </label>
            {errorMsg && (
                <div className="p-3 bg-red-50 text-red-600 text-xs rounded-lg flex items-start gap-2">
                    <Icons.AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    {errorMsg}
                </div>
            )}
          </section>

          <section className="pt-2 border-t border-gray-100">
             <button 
                onClick={detectFaceAndAlign}
                disabled={!bgImage || !model || loading}
                className={`w-full py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 font-bold text-sm transition-all shadow-sm
                    ${!bgImage || !model 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200' 
                        : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-md hover:scale-[1.02]'}`}
             >
                <Icons.RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                {loading ? loadingText : 'AI 顔検出＆自動配置'}
             </button>
          </section>

          {model && (
            <section className="space-y-5 pt-4 border-t border-gray-200 animate-in fade-in slide-in-from-left-4 duration-500">
              <h2 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <Icons.Move className="w-4 h-4 text-indigo-500"/> 調整パネル
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-gray-400 flex items-center gap-1">
                            <Icons.Maximize className="w-3 h-3"/> サイズ
                        </label>
                        <input type="range" min="0.05" max="2.0" step="0.01" value={transform.scale} 
                        onChange={(e) => setTransform({...transform, scale: Number(e.target.value)})}
                        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-gray-400 flex items-center gap-1">
                            <Icons.RotateCw className="w-3 h-3"/> 回転
                        </label>
                        <input type="range" min="-180" max="180" value={transform.rotation} 
                        onChange={(e) => setTransform({...transform, rotation: Number(e.target.value)})}
                        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                    </div>
                </div>

                {/* マスク機能 */}
                <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100 space-y-3">
                    <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-indigo-700 flex items-center gap-2 cursor-pointer">
                            <Icons.Scissors className="w-4 h-4"/> 円形切り抜き (Mask)
                        </label>
                        <input 
                            type="checkbox" 
                            checked={isMasked}
                            onChange={(e) => setIsMasked(e.target.checked)}
                            className="w-4 h-4 cursor-pointer accent-indigo-600"
                        />
                    </div>
                    
                    {isMasked && (
                        <div className="space-y-3 pt-1">
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-gray-500">切り抜きサイズ</label>
                                <input type="range" min="50" max="2000" step="10" 
                                    value={maskSettings.radius}
                                    onChange={(e) => setMaskSettings({...maskSettings, radius: Number(e.target.value)})}
                                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-gray-500">切り抜き位置 (縦)</label>
                                <input type="range" min="-2000" max="2000" step="10" 
                                    value={maskSettings.y}
                                    onChange={(e) => setMaskSettings({...maskSettings, y: Number(e.target.value)})}
                                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                            </div>
                        </div>
                    )}
                </div>

                {/* 全パラメータ一覧 (動的生成) */}
                <div className="p-3 bg-pink-50 rounded-lg border border-pink-100 space-y-3">
                    <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-pink-700 flex items-center gap-2">
                            <Icons.Sliders className="w-4 h-4"/> 全パラメータ ({parameters.length})
                        </label>
                    </div>
                    
                    <div className="space-y-3 pt-1 max-h-64 overflow-y-auto pr-1">
                        {parameters.length === 0 && <p className="text-xs text-gray-400">パラメータなし</p>}
                        {parameters.map((param) => (
                            <div key={param.id} className="space-y-1">
                                <div className="flex justify-between">
                                    <label className="text-[10px] font-mono font-bold text-gray-600 truncate w-3/4" title={param.id}>
                                        {param.name}
                                    </label>
                                    <span className="text-[10px] text-gray-400">{param.value.toFixed(2)}</span>
                                </div>
                                <input type="range" 
                                    min={param.min} 
                                    max={param.max} 
                                    step={(param.max - param.min) / 100}
                                    value={param.value}
                                    onChange={(e) => handleParamChange(param.id, e.target.value)}
                                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500" />
                            </div>
                        ))}
                    </div>
                </div>

                {expressions.length > 0 && (
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gray-400 flex items-center gap-1">
                        <Icons.Smile className="w-3 h-3"/> 表情プリセット
                    </label>
                    <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto pr-1">
                        {expressions.map(exp => (
                            <button key={exp} onClick={() => playExpression(exp)} 
                            className="text-xs bg-white border border-gray-200 text-gray-600 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 py-1.5 px-2 rounded transition text-left truncate">
                                {exp}
                            </button>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          <div className="pt-6 mt-auto pb-6">
            <button 
                onClick={handleDownload}
                disabled={!model}
                className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
                ${!model 
                    ? 'bg-gray-100 text-gray-300' 
                    : 'bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-green-200'}`}>
                <Icons.Download className="w-5 h-5"/> 画像を保存
            </button>
          </div>

        </div>
      </div>

      <div className="flex-1 bg-gray-200 flex items-center justify-center overflow-auto p-4 md:p-8 relative">
        <div className="relative shadow-2xl border-4 border-white bg-white rounded-sm overflow-hidden" ref={canvasRef}>
        </div>
        
        {loading && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white/90 p-6 rounded-2xl shadow-2xl flex flex-col items-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-indigo-100 border-t-indigo-600 mb-4"></div>
                    <p className="font-bold text-gray-700">{loadingText}</p>
                </div>
            </div>
        )}

        {!bgImage && !loading && (
            <div className="absolute pointer-events-none text-gray-400 flex flex-col items-center bg-white/80 p-6 rounded-xl backdrop-blur-sm border border-gray-200 shadow-sm">
                <Icons.ImageIcon className="w-12 h-12 mb-2 opacity-20"/>
                <p>左のメニューから画像をアップロードしてください</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default VtuberMaker;
