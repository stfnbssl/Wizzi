function a() {
    switch (path.split('.').pop()) {
        case 'js':
        return 'javascript';
        case 'ts':
        case 'tsx':
        return 'typescript';
        case 'json':
        return 'json';
        case 'css':
        return 'css';
        case 'html':
        return 'html';
        case 'md':
        return 'markdown';
        default:
        return undefined;
    }
}