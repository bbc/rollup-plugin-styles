import path from "path";
import resolveAsync from "../../utils/resolve-async";
import { getUrlOfPartial, isModule, normalizeUrl } from "../../utils/url";

const importer: sass.Importer = (url, importer, done) => {
  // Do not add `.css` extension in order to inline the file
  const finishImport = (id: string): void => done({ file: id.replace(/\.css$/i, "") });

  // Pass responsibility back to other custom importers
  const next = (): void => done(null);

  if (!isModule(url)) return next();
  const moduleUrl = normalizeUrl(url);
  const partialUrl = getUrlOfPartial(moduleUrl);
  const options = { basedir: path.dirname(importer), extensions: [".scss", ".sass", ".css"] };

  // Give precedence to importing a partial
  resolveAsync(partialUrl, options)
    .then(finishImport)
    .catch(error => {
      if (error.code === "MODULE_NOT_FOUND" || error.code === "ENOENT")
        resolveAsync(moduleUrl, options).then(finishImport).catch(next);
      else next();
    });
};

export default importer;
